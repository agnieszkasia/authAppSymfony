<?php

namespace App\Entity\Users;

use App\Entity\AdditionalFields\TestingSystem;
use App\Repository\Users\TesterRepository;
use App\Traits\UserTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TesterRepository::class)]
class Tester extends UserType
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
    protected string $selenium;

    #[ORM\ManyToMany(targetEntity: TestingSystem::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'user_testing_system')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected Collection $testingSystems;

    public function __construct()
    {
        $this->reportSystems = new ArrayCollection();
        $this->testingSystems = new ArrayCollection();
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
        return $this::POSITION_TESTER;
    }

    public function getSelenium(): ?bool
    {
        return $this->selenium;
    }

    public function setSelenium(bool $selenium): self
    {
        $this->selenium = $selenium;

        return $this;
    }

    public function addTestingSystem(TestingSystem $testingSystem): self
    {
        if (!$this->testingSystems->contains($testingSystem)) {
            $this->testingSystems->add($testingSystem);
        }

        return $this;
    }

    public function removeTestingSystem(TestingSystem $testingSystem): self
    {
        if (!$this->testingSystems->contains($testingSystem)) {
            $this->testingSystems->remove($testingSystem);
        }

        return $this;
    }

    public function getTestingSystems(): Collection
    {
        return $this->testingSystems;
    }

    public function getConfirmationEmailHtml()
    {
        $html = '<html><body>Witaj, <br>pomyślnie zarejestrowałeś się.<br><br>Dane podane podczas rejestacji' .
            '<br>Imię i nazwisko: ' . $this->getName() . ' ' . $this->getSurname() .
            '<br>Email:' . $this->getEmail() . '<br>Opis:  ' . $this->getDescription() .
            '<br>Stanowisko: ' . $this->getPosition() .
            '</body></html>';

        if ($this->getSelenium()) {
            $selenium = 'TAK';
        } else {
            $selenium = 'NIE';
        }

        $html = $html . '<br>Zna selenium:' . $selenium .
        '<br>Systemy testujące:'.
        '<br>Systemy raportowe:';

        return $html;
    }
}
