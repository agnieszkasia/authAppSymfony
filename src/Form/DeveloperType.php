<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DeveloperType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['data'];

        $programmingLanguages = $user->getAdditionalFieldString($user->getProgrammingLanguages());
        $ideEnvironments = $user->getAdditionalFieldString($user->getIdeEnvironments());

        $builder
            ->add('ide', TextType::class, ['label' => 'Środowiska IDE', 'required' => false])
            ->add('languages', TextType::class, ['label' => 'Języki programowania', 'data'=> $programmingLanguages,'required' => false])
            ->add('mysql', CheckboxType::class, ['label' => 'zna mysql', 'data' => $ideEnvironments, 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
