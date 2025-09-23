export const initials = (value: string) =>
    value
      .split(' ')
      .slice(0, 2)
      .map((name) => name[0])
      .join('');
  
type FullNameProps =
    | {
        firstName?: string;
        lastName?: string;
      }
    | undefined;
  
export const fullName = (name: FullNameProps) => {
    const firstName = name?.firstName ?? '';
    const lastName = name?.lastName ?? '';

    return `${firstName}${lastName ? ' ' + lastName : ''}`;
};

export const addressLine1Formatter = ({
    line1,
    line2,
    }: {
    line1?: string;
    line2?: string;
}) => `${line1 || ''} ${line2 || ''}`;

export const addressLine2Formatter = ({
    city,
    state,
    zip,
    }: {
    city?: string;
    state?: { code?: string };
    zip?: string;
}) =>
`${city || ''}${city && state?.code ? ',' : ''} ${state?.code || ''} ${
    zip || ''
}`;

export const formatPhoneNumber = (value1: string): string => {
    const value = noPhoneNumberFormat(value1) || '';
    const size = value.length;

    return size < 0
    ? value
    : size === 0
    ? value
    : size <= 3
    ? `(${value}`
    : size <= 6
    ? `(${value.substring(0, 3)}) ${value.substring(3, 6)}`
    : size <= 10
    ? `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(
        6,
        10,
    )}`
    : `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(
        6,
        10,
    )} x${value.substring(10)}`;
};

export const noPhoneNumberFormat = (value: string) =>
    value?.replace(/\D/g, '').substring(0, 20);