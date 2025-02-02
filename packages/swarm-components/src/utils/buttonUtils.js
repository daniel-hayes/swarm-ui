// @flow
import type { ButtonProps } from '../Button';
import type { LinkButtonProps } from '../LinkButton';

type Props = ButtonProps | LinkButtonProps;

/**
 *
 * @param {*} props
 *
 */
export const getButtonType = (props: Props): string => {
	let buttonType = 'default';

	if (props.disabled) {
		buttonType = 'disabled';
	} else if (props.reset) {
		buttonType = 'reset';
	} else if (props.primary) {
		buttonType = 'primary';
	} else if (props.neutral) {
		buttonType = 'neutral';
	} else if (props.bordered) {
		buttonType = 'bordered';
	} else if (props.inverted) {
		buttonType = 'inverted';
	}

	return buttonType;
};

export const getSwarmSize = (props: Props): string => {
	return props.small ? 'small' : 'default';
};

export const getIconPosition = (props: Props): string => {
	return props.children ? (props.right ? 'right' : 'left') : 'only';
};
