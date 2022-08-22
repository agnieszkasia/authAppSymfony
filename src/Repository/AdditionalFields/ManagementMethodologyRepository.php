<?php

namespace App\Repository\AdditionalFields;

use App\Entity\AdditionalFields\ManagementMethodology;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ManagementMethodology>
 *
 * @method ManagementMethodology|null find($id, $lockMode = null, $lockVersion = null)
 * @method ManagementMethodology|null findOneBy(array $criteria, array $orderBy = null)
 * @method ManagementMethodology[]    findAll()
 * @method ManagementMethodology[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ManagementMethodologyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ManagementMethodology::class);
    }

    public function add(ManagementMethodology $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ManagementMethodology $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}
