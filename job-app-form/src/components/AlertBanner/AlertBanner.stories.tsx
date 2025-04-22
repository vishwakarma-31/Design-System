import { AlertBanner } from './AlertBanner';

export default {
    title: 'Components/AlertBanner',
    component: AlertBanner,
};

export const Info = () => <AlertBanner type="info" message="This is an info alert." />;
export const Success = () => <AlertBanner type="success" message="This is a success alert." />;
export const Error = () => <AlertBanner type="error" message="This is an error alert." />;
export const Warning = () => <AlertBanner type="warning" message="This is a warning alert." />;
