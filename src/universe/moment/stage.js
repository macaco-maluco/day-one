export default (stages) => (time) =>
  stages
    .slice(1)
    .concat([{stage: 'Heat Death', start: 1}])
    .reduce((prev, current) =>
      typeof prev === 'string'
        ? prev
        : (
          current.start > time
            ? prev.stage
            : current
        )
      , stages[0]
    )
