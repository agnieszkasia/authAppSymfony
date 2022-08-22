<?php

namespace App\Entity\Users;

use App\Entity\AdditionalFields\ManagementMethodology;
use App\Repository\Users\ProjectManagerRepository;
use App\Traits\UserTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectManagerRepository::class)]
class ProjectManager extends UserType
{
    use UserTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string')]
    #[ORM\OneToOne(inversedBy: 'user', targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected int $userId;

    #[ORM\Column(type: 'boolean')]
    protected string $scrum;

    #[ORM\ManyToMany(targetEntity: ManagementMethodology::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'user_management_methodology')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected Collection $managementMethodologies;

    public function __construct()
    {
        $this->reportSystems = new ArrayCollection();
        $this->managementMethodologies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?int
    {
        return $this->userId;
    }

    public function setUserId($userId): self
    {
        $this->userId = $userId;
        return $this;
    }

    public function getPosition()
    {
        return $this::POSITION_PROJECT_MANAGER;
    }

    public function getScrum(): ?bool
    {
        return $this->scrum;
    }

    public function setScrum(bool $scrum): self
    {
        $this->scrum = $scrum;

        return $this;
    }

    public function addManagementMethodology(ManagementMethodology $managementMethodology): self
    {
        if (!$this->managementMethodologies->contains($managementMethodology)) {
            $this->managementMethodologies->add($managementMethodology);
        }

        return $this;
    }

    public function getManagementMethodologies(): Collection
    {
        return $this->managementMethodologies;
    }

    public function getConfirmationEmailHtml()
    {
        $html = '<html><body>Witaj, <br>pomyślnie zarejestrowałeś się.<br><br>Dane podane podczas rejestacji' .
            '<br>Imię i nazwisko: ' . $this->getName() . ' ' . $this->getSurname() .
            '<br>Email:' . $this->getEmail() . '<br>Opis:  ' . $this->getDescription() .
            '<br>Stanowisko: ' . $this->getPosition() .
            '</body></html>';

        if ($this->getScrum()) {
            $scrum = 'TAK';
        } else {
            $scrum = 'NIE';
        }

        $html = $html . '<br>Zna scrum:' . $scrum .
            '<br>Metodologie zarządzania projektem:'.
            '<br>Systemy raportowe:';

        return $html;
    }
}
