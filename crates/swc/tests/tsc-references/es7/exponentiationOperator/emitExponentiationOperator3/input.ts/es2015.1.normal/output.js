// @target:es5
var temp = 10;
Math.pow(-++temp, 3);
Math.pow(+--temp, 3);
Math.pow(-temp++, 3);
Math.pow(+temp--, 3);
Math.pow(-Math.pow(1, ++temp), 3);
Math.pow(-Math.pow(1, --temp), 3);
Math.pow(-Math.pow(1, temp++), 3);
Math.pow(-Math.pow(1, temp--), 3);
Math.pow(-3, temp++);
Math.pow(-3, temp--);
Math.pow(-3, ++temp);
Math.pow(-3, --temp);
Math.pow(+3, temp++);
Math.pow(+3, temp--);
Math.pow(+3, ++temp);
Math.pow(+3, --temp);
Math.pow(-3, Math.pow(temp++, 2));
Math.pow(-3, Math.pow(temp--, 2));
Math.pow(-3, Math.pow(++temp, 2));
Math.pow(-3, Math.pow(--temp, 2));
Math.pow(+3, Math.pow(temp++, 2));
Math.pow(+3, Math.pow(temp--, 2));
Math.pow(+3, Math.pow(++temp, 2));
Math.pow(+3, Math.pow(--temp, 2));
Math.pow(3, -temp++);
Math.pow(3, -temp--);
Math.pow(3, -++temp);
Math.pow(3, +--temp);
Math.pow(3, Math.pow(-temp++, 2));
Math.pow(3, Math.pow(-temp--, 2));
Math.pow(3, Math.pow(+temp++, 2));
Math.pow(3, Math.pow(+temp--, 2));
Math.pow(3, Math.pow(-++temp, 2));
Math.pow(3, Math.pow(+--temp, 2));
