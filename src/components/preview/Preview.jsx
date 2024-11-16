import JSXParser from "react-jsx-parser";
import useBuilder from "../../hooks/useBuilder";
import PageLayout from "../../layout/PageLayout";
import { onFormCodeGenerator } from "../../utils";

const Preview = () => {
  const { selectForm } = useBuilder();
  const formCode = onFormCodeGenerator(selectForm);

  return (
    <PageLayout>
      {formCode && <JSXParser components={{}} jsx={formCode} />}
    </PageLayout>
  );
};

export default Preview;
