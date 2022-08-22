<?php

namespace App\Controller\Admin;

use App\Entity\Users\Developer;
use App\Entity\Users\ProjectManager;
use App\Entity\Users\Tester;
use App\Entity\Users\User;
use App\Form\UserType;
use App\Repository\Users\UserRepository;
use App\Traits\UserControllerTrait;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    use UserControllerTrait;

    protected ObjectManager $entityManager;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->entityManager = $doctrine->getManager();
    }

    #[Route('/admin', name: 'app_admin')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $users = $entityManager->getRepository(User::class)->findAll();

        return $this->render('admin/index.html.twig', [
            'title' => 'UŻYTKOWNICY',
            'users' => $users
        ]);
    }

    #[Route('/admin/editUser/{id}', name: 'admin_update_user')]
    public function update(Request $request, UserRepository $userRepository, ManagerRegistry $doctrine, $id): Response
    {
        $user = $userRepository->find($id);

        $entityManager = $doctrine->getManager();

        switch ($user->getPosition()) {
            case 'tester':
                $userType = $entityManager->getRepository(Tester::class)->findOneBy(['userId'=> $user->getId()]);
                break;
            case 'projectManger':
                $userType = $entityManager->getRepository(ProjectManager::class)->findOneBy(['userId'=> $user->getId()]);
                break;
            case 'developer':
                $userType = $entityManager->getRepository(Developer::class)->findOneBy(['userId'=> $user->getId()]);
                break;
            default:
                break;
        }

        $form = $this->createForm(UserType::class, ['user'=>$user, 'userType' => $userType]);

        if ($request->request->all('user')) {

            $formData = $request->request->all('user');

            $formData = array_merge($formData, $formData['userType']);
            unset($formData['userType']);
            $data = json_decode(json_encode($formData), FALSE);

            $this->setUserData($data, $user, $userType);

            return $this->redirect($this->generateUrl('admin_update_user', ['id' => $user->getId()]));
        }

        return $this->render('admin/user/create.html.twig', [
            'form' => $form->createView(),
            'title' => 'Edytuj użytkownika'
        ]);
    }

    #[Route('/admin/deleteUser/{id}', name: 'admin_delete_user')]
    public function remove(ManagerRegistry $doctrine, Request $request, UserRepository $userRepository, $id)
    {
        $user = $userRepository->find($id);

        $entityManager = $doctrine->getManager();

        $entityManager->remove($user);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin');
    }
}
