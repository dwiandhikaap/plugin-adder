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
        output.result = input.left + input.right;

        return {
            result: input.left + input.right
        };
    }
);