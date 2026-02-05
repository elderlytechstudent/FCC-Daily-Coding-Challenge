        function countChange(change) {
            const sum = change.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return `$${(sum / 100).toFixed(2)}`;
        }
