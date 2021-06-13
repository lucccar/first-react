import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformaion from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade."
        }
      />
      <UserInformaion
        name={"Lucas Carvalho"}
        picture={"https:/github.com/lucccar.png"}
        rating={5}
        description={"Rio de Janeiro"}
      />
    </div>
  );
}
