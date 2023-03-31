import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { Circle } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { all } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
  // Create your animations here
  const myCircle = createRef<Circle>();
  view.add(
    <Circle ref={myCircle} x={-300} width={140} height={140} fill="#e13338" />
  );
  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill("#efa500", 1).to("#e13338", 1)
  );
});
