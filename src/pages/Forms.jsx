import FormBuilding from "../components/forms/FormBuilding";
import MyForms from "../components/forms/MyForms";
import PageLayout from "../layout/PageLayout";

const Forms = () => {
  return (
    <PageLayout className="space-y-12 sm:space-y-16 md:space-y-24 py-12 sm:py-16 md:py-24">
      <MyForms />
      <FormBuilding />
    </PageLayout>
  );
};

export default Forms;
