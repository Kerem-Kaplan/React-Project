import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValue = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu!"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur!"),
  });

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
