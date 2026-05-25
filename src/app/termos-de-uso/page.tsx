import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos e condições de uso do aplicativo e da plataforma da Sênior Saúde Móvel.',
};

export default function TermosDeUso() {
  return (
    <LegalShell
      title="Termos de Uso"
      updatedAt="25 de maio de 2026"
      intro="Estes Termos de Uso regem o acesso e a utilização do aplicativo e da plataforma da Sênior Saúde Móvel. Ao criar uma conta ou utilizar nossos serviços, você declara que leu, compreendeu e concorda com as condições abaixo."
    >
      <h2>1. Aceitação dos termos</h2>
      <p>
        Ao acessar ou utilizar o aplicativo e a plataforma da Sênior Saúde Móvel
        (&ldquo;Serviço&rdquo;), você concorda em ficar vinculado a estes Termos de Uso e
        à nossa Política de Privacidade. Caso não concorde com qualquer parte destes
        termos, você não deve utilizar o Serviço.
      </p>

      <h2>2. Descrição do serviço</h2>
      <p>
        A Sênior Saúde Móvel oferece uma solução de monitoramento remoto de saúde e apoio
        ao cuidado de idosos, reunindo dados de atividades físicas, sono, frequência
        cardíaca, medições e demais indicadores de saúde para pacientes, cuidadores e
        profissionais de saúde. O Serviço tem caráter de apoio e <strong>não substitui</strong>{' '}
        a avaliação, o diagnóstico ou o tratamento realizados por profissionais de saúde
        qualificados.
      </p>

      <h2>3. Cadastro e conta</h2>
      <p>
        Para utilizar determinadas funcionalidades, você deverá criar uma conta,
        fornecendo informações verdadeiras, precisas e atualizadas. Você é responsável por
        manter a confidencialidade das suas credenciais de acesso e por todas as
        atividades realizadas em sua conta. Notifique-nos imediatamente em caso de uso não
        autorizado.
      </p>

      <h2>4. Uso adequado</h2>
      <p>Ao utilizar o Serviço, você concorda em não:</p>
      <ul>
        <li>Violar qualquer lei, regulamento ou direito de terceiros;</li>
        <li>Utilizar o Serviço para fins ilícitos, fraudulentos ou não autorizados;</li>
        <li>
          Tentar acessar áreas restritas, interferir no funcionamento do Serviço ou
          comprometer sua segurança;
        </li>
        <li>
          Copiar, modificar, distribuir ou explorar comercialmente qualquer parte do
          Serviço sem autorização expressa.
        </li>
      </ul>

      <h2>5. Saúde e responsabilidade</h2>
      <p>
        As informações disponibilizadas pelo Serviço têm finalidade informativa e de
        acompanhamento. Elas não constituem aconselhamento médico e não devem ser
        utilizadas como única base para decisões de saúde. Em caso de emergência ou
        dúvidas clínicas, procure sempre um profissional de saúde qualificado.
      </p>

      <h2>6. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo, marcas, logotipos, design, software e demais elementos do Serviço
        são de propriedade da Sênior Saúde Móvel ou de seus licenciadores e estão
        protegidos pela legislação aplicável. Nenhuma disposição destes termos transfere a
        você qualquer direito de propriedade intelectual.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento dos seus dados pessoais é regido pela nossa{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>, que faz parte
        integrante destes Termos de Uso.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        O Serviço é fornecido &ldquo;como está&rdquo; e &ldquo;conforme disponível&rdquo;.
        Na máxima extensão permitida por lei, a Sênior Saúde Móvel não se responsabiliza
        por danos indiretos, incidentais ou consequenciais decorrentes do uso ou da
        impossibilidade de uso do Serviço, nem por interrupções, falhas técnicas ou
        indisponibilidade de serviços de terceiros.
      </p>

      <h2>9. Alterações no serviço e nos termos</h2>
      <p>
        Podemos modificar, suspender ou descontinuar o Serviço, no todo ou em parte, a
        qualquer momento. Também podemos atualizar estes Termos de Uso periodicamente. As
        alterações entram em vigor a partir da sua publicação nesta página. O uso contínuo
        do Serviço após as alterações representa a sua concordância com os novos termos.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
        Fica eleito o foro da comarca de Campina Grande - PB para dirimir quaisquer
        controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>11. Contato</h2>
      <p>
        Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
