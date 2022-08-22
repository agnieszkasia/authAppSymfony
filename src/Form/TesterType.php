<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TesterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['data'];

        $testingSystems = $user->getAdditionalFieldString($user->getTestingSystems());
        $reportSystems = $user->getAdditionalFieldString($user->getReportSystems());
        $builder
            ->add('testingSystems', TextType::class, ['label' => 'Systemy testujące', 'data' => $testingSystems, 'required' => false])
            ->add('reportSystems', TextType::class, ['label' => 'Systemy raportowe', 'data' => $reportSystems,'required' => false])
            ->add('selenium', CheckboxType::class, ['label' => 'zna Selenium', 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
