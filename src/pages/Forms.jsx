import FormBuilding from "../components/forms/FormBuilding";
import MyForms from "../components/forms/MyForms";
import useBuilder from "../hooks/useBuilder";
import PageLayout from "../layout/PageLayout";

const Forms = () => {
  const { forms } = useBuilder();

  return (
    <PageLayout className="space-y-12 sm:space-y-16 md:space-y-24 py-12 sm:py-16 md:py-24 min-h-[70vh]">
      {forms?.length > 0 ? <MyForms /> : <FormBuilding />}
    </PageLayout>
  );
};

export default Forms;
