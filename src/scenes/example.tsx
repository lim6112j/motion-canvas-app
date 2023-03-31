import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Circle } from "@motion-canvas/2d/lib/components";
import { Node } from "@motion-canvas/2d/lib/components/Node";
import { createRef } from "@motion-canvas/core/lib/utils";

export default makeScene2D(function* (view) {
  // Create your animations here

  const circleA = createRef<Node>();
  const circleB = createRef<Node>();

  view.add(
    <>
      <Node position={[200, 100]}>
        <Circle
          position={[0, 100]}
          ref={circleA}
          width={20}
          height={20}
          fill={"white"}
        />
      </Node>
      <Circle ref={circleB} width={100} height={100} fill={"red"} />
    </>
  );

  yield* circleB().absolutePosition(circleA().absolutePosition());
});
