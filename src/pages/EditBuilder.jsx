import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Builder from "../components/form-builder/Builder";
import useBuilder from "../hooks/useBuilder";

const EditBuilder = () => {
  const { id } = useParams();
  const { onGetForm } = useBuilder();

  useEffect(() => {
    onGetForm(id);
  }, [id]);

  return (
    <div>
      <Builder />
    </div>
  );
};

export default EditBuilder;
