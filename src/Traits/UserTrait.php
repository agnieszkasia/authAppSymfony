<?php


namespace App\Traits;

use App\Entity\AdditionalFields\ReportSystem;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;


trait UserTrait
{
    #[ORM\ManyToMany(targetEntity: ReportSystem::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'user_report_system')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: "id")]
    protected Collection $reportSystems;

    public function addReportSystem(ReportSystem $reportSystem): self
    {
        if (!$this->reportSystems->contains($reportSystem)) {
            $this->reportSystems->add($reportSystem);
        }

        return $this;
    }

    public function getReportSystems(): Collection
    {
        return $this->reportSystems;
    }
}