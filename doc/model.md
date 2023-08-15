### Distribution

The various distributions are described in KickDistributionStrategy, which can be based on a skew, or a distribution by distance
(like an unnormalized histogram) or a sequence of exact distances.

The randomSkew distribution is randomly chosen to be left/right skewed on startup, and on reset (but not on clear).

The soccer ball has a null value until it lands, at which time it takes a numerical value.

For more information on how this model is used in context, please see the documentation in center-and-variability/doc

The SoccerSceneModel is the central container, which contains the data points, soccer players, etc.
It is set up to be reused it different "scenes".