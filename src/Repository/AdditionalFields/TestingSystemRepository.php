<?php

namespace App\Repository\AdditionalFields;

use App\Entity\AdditionalFields\TestingSystem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TestingSystem>
 *
 * @method TestingSystem|null find($id, $lockMode = null, $lockVersion = null)
 * @method TestingSystem|null findOneBy(array $criteria, array $orderBy = null)
 * @method TestingSystem[]    findAll()
 * @method TestingSystem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TestingSystemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TestingSystem::class);
    }

    public function add(TestingSystem $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TestingSystem $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

}
