import FormBuilding from "../components/forms/FormBuilding";
import MyForms from "../components/forms/MyForms";
import PageLayout from "../layout/PageLayout";

const Forms = () => {
  return (
    <PageLayout>
      <div className="py-12 space-y-20">
        <MyForms />
        <FormBuilding />
      </div>
    </PageLayout>
  );
};

export default Forms;
