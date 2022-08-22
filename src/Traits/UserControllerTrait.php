<?php


namespace App\Traits;

use App\Entity\AdditionalFields\IdeEnvironment;
use App\Entity\AdditionalFields\ManagementMethodology;
use App\Entity\AdditionalFields\ProgrammingLanguage;
use App\Entity\AdditionalFields\ReportSystem;
use App\Entity\AdditionalFields\TestingSystem;
use App\Entity\Users\Developer;
use App\Entity\Users\ProjectManager;
use App\Entity\Users\Tester;
use App\Entity\Users\User;
use Symfony\Component\HttpFoundation\Response;


trait UserControllerTrait
{
    public function setReportSystems($data, $user, $entityManager)
    {
        $reportSystems = $user->getReportSystems();

        $reportSystemsString = $user->getAdditionalFieldString($reportSystems);
        $reportSystemsNames = explode(',', $reportSystemsString);

        $reportSystemsData = explode(',', $data);

        foreach ($reportSystems as $fieldName) {
            if (!in_array($fieldName->getName(), $reportSystemsData)) {
                $entityManager->remove($fieldName);
            }
        }

        foreach ($reportSystemsData as $fieldName) {
            if (!in_array(trim($fieldName), $reportSystemsNames)) {
                $reportSystem = new ReportSystem();
                $reportSystem->setName(trim($fieldName));
                $entityManager->persist($reportSystem);
                $user->addReportSystem($reportSystem);
            }
        }


    }

    public function setTestingSystems($data, $user, $entityManager)
    {
        $testingSystems = $user->getTestingSystems();

        $testingSystemsString = $user->getAdditionalFieldString($testingSystems);
        $testingSystemsNames = explode(',', $testingSystemsString);

        $testingSystemsData = explode(',', $data);

        foreach ($testingSystems as $fieldName) {
            if (!in_array($fieldName->getName(), $testingSystemsData)) {
                $entityManager->remove($fieldName);
            }
        }

        foreach ($testingSystemsData as $fieldName) {
            if (!in_array(trim($fieldName), $testingSystemsNames)) {
                $testingSystem = new TestingSystem();
                $testingSystem->setName($fieldName);
                $entityManager->persist($testingSystem);
                $user->addTestingSystem($testingSystem);
            }
        }
    }

    public function setProgramingLanguage($data, $user, $entityManager)
    {
        $programmingLanguages = $user->getProgrammingLanguages();

        $programmingLanguageString = $user->getAdditionalFieldString($programmingLanguages);
        $programmingLanguagesNames = explode(',', $programmingLanguageString);

        $programmingLanguagesData = explode(',', $data);

        foreach ($programmingLanguages as $fieldName) {
            if (!in_array($fieldName->getName(), $programmingLanguagesData)) {
                $entityManager->remove($fieldName);
            }
        }

        foreach ($programmingLanguagesData as $fieldName) {
            if (!in_array(trim($fieldName), $programmingLanguagesNames)) {
                $programmingLanguage = new ProgrammingLanguage();
                $programmingLanguage->setName($fieldName);
                $entityManager->persist($programmingLanguage);
                $user->addProgrammingLanguage($programmingLanguage);
            }
        }
    }

    public function setIdeEnvironments($data, $user, $entityManager)
    {
        $ideEnvironments = $user->getIdeEnvironments();

        $ideEnvironmentString = $user->getAdditionalFieldString($ideEnvironments);
        $ideEnvironmentsNames = explode(',', $ideEnvironmentString);

        $ideEnvironmentsData = explode(',', $data);

        foreach ($ideEnvironments as $fieldName) {
            if (!in_array($fieldName->getName(), $ideEnvironmentsData)) {
                $entityManager->remove($fieldName);
            }
        }

        foreach ($ideEnvironmentsData as $fieldName) {
            if (!in_array(trim($fieldName), $ideEnvironmentsNames)) {
                $ideEnvironment = new IdeEnvironment();
                $ideEnvironment->setName($fieldName);
                $entityManager->persist($ideEnvironment);
                $user->addIdeEnvironment($ideEnvironment);
            }
        }
    }

    public function setManagementMethodology($data, $user, $entityManager)
    {
        $managementMethodologies = $user->getManagementMethodologies();

        $managementMethodologiesString = $user->getAdditionalFieldString($managementMethodologies);
        $managementMethodologiesNames = explode(',', $managementMethodologiesString);

        $managementMethodologiesData = explode(',', $data);

        foreach ($managementMethodologies as $fieldName) {
            if (!in_array($fieldName->getName(), $managementMethodologiesData)) {
                $entityManager->remove($fieldName);
            }
        }

        foreach ($managementMethodologiesData as $fieldName) {
            if (!in_array(trim($fieldName), $managementMethodologiesNames)) {
                $managementMethodology = new ManagementMethodology();
                $managementMethodology->setName($fieldName);
                $entityManager->persist($managementMethodology);

                $user->addManagementMethodology($managementMethodology);
            }
        }
    }

    public function setUserData($data, $user = null, $userType = null)
    {
        $entityManager = $this->entityManager;

        if ($user == null) {
            $user = new User();
        }

        $user->setName($data->name);
        $user->setSurname($data->surname);
        $user->setEmail($data->email);
        $user->setDescription($data->description);
//        $user->setPosition($data->position);
        $entityManager->persist($user);

        if ($user !== null) {
            $entityManager->flush();
        }


        if ($data->position == $user->getPosition()){

        } elseif ($userType != null) {
            $entityManager->remove($userType);
            $entityManager->flush();
            $userType = null;
        }

        switch ($data->position) {
            case 'tester':
                if ($userType == null) {
                    $userType = new Tester();
                }
                $userType->setSelenium(isset($data->selenium));
                $userType->setUserId($user->getId());
                $this->setReportSystems($data->reportSystems, $userType, $entityManager);
                $this->setTestingSystems($data->testingSystems, $userType, $entityManager);
                $entityManager->persist($userType);

                break;
            case 'developer':
                if ($userType == null) {
                    $userType = new Developer();
                }
                $userType->setMysql(isset($data->mysql));
                $userType->setUserId($user->getId());
                $this->setProgramingLanguage($data->languages, $userType, $entityManager);
                $this->setIdeEnvironments($data->ide, $userType, $entityManager);
                $entityManager->persist($userType);

                break;
            case 'projectManager':
                if ($userType == null) {
                    $userType = new ProjectManager();
                }
                $userType->setScrum(isset($data->scrum));
                $userType->setUserId($user->getId());
                $this->setReportSystems($data->reportSystems, $userType, $entityManager);
                $this->setManagementMethodology($data->projectMethods, $userType, $entityManager);
                $entityManager->persist($userType);

                break;
            default:
                break;
        }

        if (!isset($user)) {
            return new Response('Nie udało się zarejestrować użytkownika.');
        }
        $entityManager->flush();

        return $user;
    }
}