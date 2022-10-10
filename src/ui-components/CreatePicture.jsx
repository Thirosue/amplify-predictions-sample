/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Picture } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function CreatePicture(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveSixTwoSixNineZeroValue,
    setTextFieldThreeFourFiveSixTwoSixNineZeroValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      description: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      Url: textFieldThreeFourFiveSixTwoSixNineZeroValue,
    },
    model: Picture,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="505px"
      position="relative"
      padding="0px 0px 86px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreatePicture")}
    >
      <Flex
        gap="24px"
        direction="column"
        height="493px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 323px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Picture"
            {...getOverrideProps(overrides, "Create Picture")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Name"
          placeholder="John Doe"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
          onChange={(event) => {
            setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField29766922")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Description"
          placeholder="Seattle, WA"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
          onChange={(event) => {
            setTextFieldTwoNineSevenSixSixNineTwoThreeValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField29766923")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Url"
          placeholder="https://raw.githubusercontent.com/Thirosue/hosting-image/main/img/drink/coffee.jpeg"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeFourFiveSixTwoSixNineZeroValue}
          onChange={(event) => {
            setTextFieldThreeFourFiveSixTwoSixNineZeroValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField34562690")}
        ></TextField>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
