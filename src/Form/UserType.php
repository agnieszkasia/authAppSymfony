<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['data']['user'];
        $builder
            ->add('name', TextType::class, ['label' => 'Imię', 'data' => $user->getName()])
            ->add('surname', TextType::class, ['label' => 'Nazwisko', 'data' => $user->getSurname()])
            ->add('email', TextType::class, ['label' => 'Email', 'data' => $user->getEmail()])
            ->add('description', TextType::class, ['label' => 'Opis', 'required' => false, 'data' => $user->getDescription()])
            ->add('position', HiddenType::class, ['label' => 'Stanowisko', 'data' => $user->getPosition()]);

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            $data = $event->getData();
            $form = $event->getForm();

            switch ($data['user']->getPosition()) {
                case 'tester':
                    $form->add('userType', TesterType::class, ['label' => false, 'data'=> $data['userType']]);
                    break;
                case 'projectManger':
                    $form->add('userType', ProjectManagerType::class, ['label' => false]);
                    break;
                case 'developer':
                    $form->add('userType', DeveloperType::class, ['label' => false]);
                    break;
                default:
                    break;
            }

            $form->add('save', SubmitType::class, [
                'label' => 'Zapisz',
                'attr' => [
                    'class' => 'btn btn-dark float-end'
                ]
            ]);
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
