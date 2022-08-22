<?php

namespace App\Controller;

use App\Traits\UserControllerTrait;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    use UserControllerTrait;

    protected ObjectManager $entityManager;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->entityManager = $doctrine->getManager();
    }

    #[Route('/', name: 'app_user')]
    public function index(): Response
    {
        return $this->render('user/form.html.twig', [
            'controller_name' => 'UserController',
            'title' => 'Rejestracja'
        ]);
    }

    #[Route('/register', name: 'create_user')]
    public function register(Request $request, MailerInterface $mailer, ValidatorInterface $validator): Response
    {
        $data = (object)json_decode($request->getContent(), true);
        $user = $this->setUserData($data);
        $html = $user->getConfirmationEmailHtml();

        $this->sendConfirmationMail($user->getEmail(), 'Potweirdzenie rejestacji', $html);

        return new Response(json_encode(["status" => 'ok', "message" => 'Registered new user ']));
    }

    public function sendConfirmationMail($email, $subject, $html)
    {
        $mail = (new Email())
            ->from('support@example.com')
            ->to($email)
            ->subject($subject)
            ->html($html);

        $dsn = 'smtp://localhost:1025';
        $transport = Transport::fromDsn($dsn);

        $mailer = new Mailer($transport);

        $mailer->send($mail);
    }
}
