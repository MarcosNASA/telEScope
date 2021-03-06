export const filterMatchingIdentifiers =
  (variables) =>
  ({ identifier: { start: referenceStart, end: referenceEnd } }) =>
    !variables.some(
      ({
        identifier: {
          start: referenceStructureStart,
          end: referenceStructureEnd,
        },
      }) =>
        referenceStructureStart === referenceStart &&
        referenceStructureEnd === referenceEnd,
    );

export const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((soFar, fn) => fn(soFar), ...args);
