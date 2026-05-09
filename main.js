registerPlugin(
    {
        "left": {
            kind: "number"
        },
        "right": {
            kind: "number"
        }
    },
    {
        "result": {
            kind: "number"
        }
    },
    async (input) => {
        return {
            result: input.left + input.right
        };
    }
);