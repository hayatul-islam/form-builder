import FormBuilding from "../components/forms/FormBuilding";
import MyForms from "../components/forms/MyForms";
import PageLayout from "../layout/PageLayout";

const Forms = () => {
  return (
    <PageLayout className="space-y-24 py-24">
      <MyForms />
      <FormBuilding />
    </PageLayout>
  );
};

export default Forms;
