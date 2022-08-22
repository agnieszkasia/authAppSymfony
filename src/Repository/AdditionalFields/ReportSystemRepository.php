<?php

namespace App\Repository\AdditionalFields;

use App\Entity\AdditionalFields\ReportSystem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ReportSystem>
 *
 * @method ReportSystem|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReportSystem|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReportSystem[]    findAll()
 * @method ReportSystem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReportSystemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReportSystem::class);
    }

    public function add(ReportSystem $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ReportSystem $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}
