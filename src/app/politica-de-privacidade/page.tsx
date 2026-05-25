import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como a Sênior Saúde Móvel coleta, usa, armazena e protege suas informações pessoais e dados de saúde.',
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalShell
      title="Política de Privacidade"
      updatedAt="25 de maio de 2026"
      intro="Este documento descreve como a Sênior Saúde Móvel coleta, usa, armazena e protege suas informações pessoais e dados de saúde. Ao usar nosso aplicativo e nossa plataforma, você concorda com as práticas descritas nesta política."
    >
      <p>
        A Sênior Saúde Móvel oferece um serviço de monitoramento remoto de saúde voltado
        ao cuidado de idosos. As informações pessoais que coletamos são usadas
        exclusivamente para fornecer e melhorar nossos serviços. Não usaremos nem
        compartilharemos suas informações com ninguém, exceto conforme descrito nesta
        Política de Privacidade. Os termos aqui empregados têm o mesmo significado
        definido em nossos Termos de Uso.
      </p>

      <h2>1. Coleta e uso de informações</h2>
      <p>
        O aplicativo pode coletar dois tipos de informação: (1) informações não pessoais
        e anônimas, coletadas automaticamente, e (2) informações de identificação pessoal
        e dados de saúde, coletados somente após o seu consentimento explícito.
      </p>

      <h3>Informações não pessoais coletadas automaticamente</h3>
      <p>
        Informações técnicas que incluem dados sobre o sistema operacional, a versão do
        aplicativo instalada e características do dispositivo. Tais informações permanecem
        anônimas — ou seja, não identificam você pessoalmente — e são usadas para melhorar
        o aplicativo, entendendo como, quando e onde ele é utilizado.
      </p>

      <h3>Dados de saúde fornecidos com o seu consentimento</h3>
      <p>
        Para oferecer uma visão detalhada e personalizada da sua saúde, e mediante a sua
        autorização, o aplicativo pode coletar os seguintes dados a partir de wearables
        como o <strong>Fitbit</strong> e o <strong>Apple Watch</strong>, por meio das
        plataformas Fitbit e Saúde (Apple Health):
      </p>
      <ul>
        <li>Passos e minutos ativos;</li>
        <li>Atividades físicas;</li>
        <li>Registros de sono;</li>
        <li>Frequência cardíaca;</li>
        <li>Pressão arterial, peso e demais medições registradas.</li>
      </ul>
      <p>
        <strong>Consentimento.</strong> A coleta desses dados somente ocorrerá após você
        realizar o login no aplicativo e conceder permissão explícita para a coleta. Você
        pode revogar essa permissão a qualquer momento nas configurações do seu
        dispositivo. Uma vez coletados, os dados são armazenados em nossa plataforma de
        forma segura, seguindo políticas de proteção que impedem relacioná-los a
        informações sensíveis de terceiros.
      </p>

      <h3>Como usamos seus dados</h3>
      <p>Os dados coletados são utilizados para:</p>
      <ul>
        <li>
          Fornecer uma visão detalhada e personalizada da sua saúde e atividade física no
          nosso dashboard, para você, seus cuidadores e profissionais de saúde;
        </li>
        <li>Melhorar a experiência de uso do aplicativo e da plataforma;</li>
        <li>Desenvolver novas funcionalidades e serviços;</li>
        <li>
          Apoiar a avaliação fisioterapêutica continuada e a tomada de decisão clínica.
        </li>
      </ul>

      <h2>2. Privacidade das crianças</h2>
      <p>
        Este aplicativo não se destina ao uso por crianças. Levamos a privacidade dos
        menores a sério e não coletamos intencionalmente informações de crianças. Caso o
        aplicativo venha a ser instalado em dispositivos pertencentes a menores de idade,
        isso será de responsabilidade dos seus pais ou responsáveis legais, que devem
        desempenhar um papel ativo no acompanhamento.
      </p>

      <h2>3. Com quem compartilhamos as informações</h2>
      <p>
        Não compartilhamos seus dados pessoais com terceiros, exceto quando:
      </p>
      <ul>
        <li>Você nos der consentimento explícito para compartilhar as informações;</li>
        <li>For necessário para cumprir a lei ou responder a processos legais;</li>
        <li>For necessário para proteger nossos direitos, propriedade ou segurança.</li>
      </ul>
      <p>
        Podemos contar com empresas e profissionais de saúde que fazem parte do projeto
        para facilitar o serviço, executá-lo em nosso nome ou analisar como ele é usado.
        Esses terceiros têm acesso apenas às informações necessárias para realizar tais
        tarefas e são obrigados a não divulgá-las ou utilizá-las para qualquer outra
        finalidade.
      </p>

      <h2>4. Coleta de informações por terceiros</h2>
      <p>
        O aplicativo pode utilizar serviços de terceiros que coletam informações para
        oferecer funcionalidades e ferramentas de análise e identificação de erros. Os
        principais serviços e suas respectivas políticas de privacidade são:
      </p>
      <ul>
        <li>
          <strong>Apple Health</strong> — fornece dados de saúde com o seu consentimento.
          Política de privacidade da Apple:{' '}
          <a href="https://www.apple.com/br/legal/privacy/" target="_blank" rel="noopener noreferrer">
            apple.com/br/legal/privacy
          </a>
          .
        </li>
        <li>
          <strong>Fitbit</strong> — coleta dados de atividades físicas, sono, peso e
          frequência cardíaca. Política de privacidade:{' '}
          <a href="https://www.fitbit.com/global/br/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            fitbit.com/legal/privacy-policy
          </a>
          .
        </li>
        <li>
          <strong>Google Analytics / Firebase</strong> — coleta dados analíticos anônimos
          e registros de falhas para nos ajudar a melhorar o aplicativo. Política de
          privacidade:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          .
        </li>
      </ul>
      <p>
        As informações coletadas por nós são tratadas conforme esta Política de
        Privacidade. O uso de informações por terceiros é regido pelas próprias políticas
        de cada serviço.
      </p>

      <h2>5. Armazenamento e segurança dos dados</h2>
      <p>
        A segurança e a confidencialidade das suas informações são extremamente
        importantes para nós. Os dados coletados são armazenados de forma segura em nossos
        servidores, com medidas técnicas, administrativas e físicas para proteger suas
        informações contra acesso não autorizado, alteração, divulgação ou destruição.
        Revisamos periodicamente nossos mecanismos de segurança. Ainda assim, nenhum
        sistema é completamente infalível, e não é possível garantir segurança absoluta.
      </p>
      <p>
        Você também desempenha um papel importante: mantenha seu nome de usuário e senha
        em segurança e efetue logout sempre que utilizar um dispositivo público ou
        compartilhado.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito
        de:
      </p>
      <ul>
        <li>Acessar e corrigir suas informações pessoais armazenadas por nós;</li>
        <li>Solicitar a exclusão de suas informações pessoais;</li>
        <li>Revogar seu consentimento para a coleta e o uso dos seus dados.</li>
      </ul>
      <p>
        Para exercer esses direitos, entre em contato pelo e-mail{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>7. Retenção de dados</h2>
      <p>
        Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir os
        propósitos para os quais foram coletadas, inclusive obrigações legais. Para
        determinar o período de retenção adequado, consideramos a quantidade, a natureza e
        a sensibilidade dos dados, o risco potencial de uso não autorizado e os requisitos
        legais aplicáveis.
      </p>

      <h2>8. Transferência internacional de dados</h2>
      <p>
        Seus dados pessoais podem ser transferidos e mantidos em servidores localizados
        fora do seu estado, país ou jurisdição, onde as leis de proteção de dados podem
        ser diferentes. Ao fornecer suas informações e concordar com esta política, você
        consente com essa transferência, sempre realizada sob medidas adequadas de
        proteção.
      </p>

      <h2>9. Alterações a esta Política de Privacidade</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você
        sobre quaisquer mudanças publicando a nova política nesta página e, quando as
        alterações forem significativas, por meio de avisos mais destacados. Recomendamos
        revisar esta página regularmente.
      </p>

      <h2>10. Contato</h2>
      <p>
        Se você tiver qualquer dúvida ou preocupação sobre esta Política de Privacidade,
        entre em contato pelo e-mail{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        {site.name} — {site.address.line1}, {site.address.line2}, CEP {site.address.zip}.
      </p>
    </LegalShell>
  );
}
