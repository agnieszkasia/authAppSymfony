<?php

namespace App\Entity\Users;

use App\Entity\AdditionalFields\IdeEnvironment;
use App\Entity\AdditionalFields\ProgrammingLanguage;
use App\Repository\Users\DeveloperRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DeveloperRepository::class)]
class Developer extends UserType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string')]
    #[ORM\OneToOne(inversedBy: 'user', targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected int $userId;

    #[ORM\Column(type: 'boolean')]
    protected string $mysql;

    #[ORM\ManyToMany(targetEntity: IdeEnvironment::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'user_ide_environment')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected Collection $ideEnvironments;

    #[ORM\ManyToMany(targetEntity: ProgrammingLanguage::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'user_programming_language')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected Collection $programmingLanguages;

    public function __construct()
    {
        $this->ideEnvironments = new ArrayCollection();
        $this->programmingLanguages = new ArrayCollection();
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
        return $this::POSITION_DEVELOPER;
    }

    public function getMysql(): ?bool
    {
        return $this->mysql;
    }

    public function setMysql(bool $mysql): self
    {
        $this->mysql = $mysql;

        return $this;
    }

    public function addIdeEnvironment(IdeEnvironment $ideEnvironment): self
    {
        if (!$this->ideEnvironments->contains($ideEnvironment)) {
            $this->ideEnvironments->add($ideEnvironment);
        }

        return $this;
    }

    public function getIdeEnvironments(): Collection
    {
        return $this->ideEnvironments;
    }

    public function addProgrammingLanguage(ProgrammingLanguage $programmingLanguage): self
    {
        if (!$this->programmingLanguages->contains($programmingLanguage)) {
            $this->programmingLanguages->add($programmingLanguage);
        }

        return $this;
    }

    public function getProgrammingLanguages(): Collection
    {
        return $this->programmingLanguages;
    }

    public function getConfirmationEmailHtml()
    {
        $html = '<html><body>Witaj, <br>pomyślnie zarejestrowałeś się.<br><br>Dane podane podczas rejestacji' .
            '<br>Imię i nazwisko: ' . $this->getName() . ' ' . $this->getSurname() .
            '<br>Email:' . $this->getEmail() . '<br>Opis:  ' . $this->getDescription() .
            '<br>Stanowisko: ' . $this->getPosition() .
            '</body></html>';

        if ($this->setMysql()) {
            $mysql = 'TAK';
        } else {
            $mysql = 'NIE';
        }

        $html = $html . '<br>Zna mysql:' . $mysql .
            '<br>Środowiwska IDE:' .
            '<br>Języki programowania:';

        return $html;
    }
}
