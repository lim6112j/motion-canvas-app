import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import {
  CodeBlock,
  lines,
  insert,
  edit,
  remove,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { createRef } from "@motion-canvas/core/lib/utils";
import { waitFor } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
  const codeRef = createRef<CodeBlock>();
  yield view.add(<CodeBlock ref={codeRef} code={`var myBool;`} />);

  yield* codeRef().edit(1.2)`var myBool${insert(" = true")};`;
  yield* waitFor(1);
  yield* codeRef().edit(1.2)`var myBool = ${edit("true", "false")};`;
  yield* waitFor(1);
  yield* codeRef().edit(1.2)`var myBool${remove(" = false")};`;
});
