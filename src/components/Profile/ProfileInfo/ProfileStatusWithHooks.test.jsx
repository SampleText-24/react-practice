import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus Component", () => {
  test("auto creation span with correct status should be displayed", () => {
    const component = create(
      <ProfileStatusWithHooks status="Sample text was here" />
    );
    const instance = component.getInstance();
    let span = instance.findByType("span");
    expect(span.length).toBe(1);
  });
});
