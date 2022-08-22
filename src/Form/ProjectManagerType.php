<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectManagerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['data'];

        $managementMethodologies = $user->getAdditionalFieldString($user->getManagementMethodologies());
        $reportSystems = $user->getAdditionalFieldString($user->getReportSystems());

        $builder
            ->add('projectMethods', TextType::class, [
                'label' => 'Metodologie prowadzenia projektów',
                'data' => $managementMethodologies,
                'required' => false
            ])
            ->add('reportSystems', TextType::class, [
                'label' => 'Systemy raportowe',
                'data' => $reportSystems,
                'required' => false])
            ->add('scrum', CheckboxType::class, ['label' => 'zna scrum', 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
