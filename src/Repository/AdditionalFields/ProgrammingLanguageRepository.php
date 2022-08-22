<?php

namespace App\Repository\AdditionalFields;

use App\Entity\AdditionalFields\ProgrammingLanguage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProgrammingLanugage>
 *
 * @method ProgrammingLanguage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProgrammingLanguage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProgrammingLanguage[]    findAll()
 * @method ProgrammingLanguage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProgrammingLanguageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProgrammingLanguage::class);
    }

    public function add(ProgrammingLanguage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ProgrammingLanguage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}
