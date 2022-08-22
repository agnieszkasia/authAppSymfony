<?php

namespace App\Entity\Users;

use Doctrine\ORM\Mapping as ORM;

abstract class UserType
{
    const POSITION_DEVELOPER = 'developer';
    const POSITION_PROJECT_MANAGER = 'projectManager';
    const POSITION_TESTER = 'tester';
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getAdditionalFieldString($testingSystems)
    {
        $array = [];
        foreach ($testingSystems as $testingSystem) {
            $array[] = $testingSystem->getName();
        }

        return implode(',', $array);
    }
}
