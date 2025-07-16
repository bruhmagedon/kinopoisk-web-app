type ClsxParams = (
    | boolean
    | string
    | Record<string, boolean | string>
    | string[]
    | null
    | undefined
)[];
/**
 * Объединяет классы в одну строку по аналогии с популярной библиотекой clsx.
 *
 * Принимает любое количество аргументов: строки, массивы строк, объекты вида {className: true/false}, булевы значения.
 * Булевы значения и falsy-значения игнорируются.
 *
 * @param {...(string | boolean | Record<string, boolean | string> | string[])[]} args - Классы для объединения
 * @returns {string} Строка с уникальными классами, разделёнными пробелом
 *
 * @example
 * clsx('foo', { bar: true, baz: false }, ['qux', 'quux'], false) => 'foo bar qux quux'
 */
export const clsx = (...args: ClsxParams): string => {
    const classSet = new Set<string>();

    args.forEach((className) => {
        if (!className) {
            return;
        }
        if (Array.isArray(className)) {
            for (const item of className) {
                if (item) {
                    classSet.add(item);
                }
            }
        } else if (typeof className === 'object') {
            for (const key in className) {
                if (Object.prototype.hasOwnProperty.call(className, key)) {
                    classSet.add(key);
                }
            }
        } else {
            classSet.add(String(className));
        }
    });

    return Array.from(classSet).join(' ');
};
