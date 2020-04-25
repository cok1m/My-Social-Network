import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="KoK1m" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("KoK1m");
  });

  test("after creation <span> with correct status should be displayed", () => {
    const component = create(<ProfileStatus status="KoK1m" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.children.length).not.toBeNull();
  });

  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="KoK1m" />);
    const instance = component.root;
    expect(() => {
      let input = instance.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should be correct status", () => {
    const component = create(<ProfileStatus status="Kok1m" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.children[0]).toBe("Kok1m");
  });
  
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Kok1m" />);
    const instance = component.root;
    let span = instance.findByType("span");
    span.props.onDoubleClick();
    let input = instance.findByType("input")
    expect(input.props.value).toBe("Kok1m");
  });
  
  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="Kok1m" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
