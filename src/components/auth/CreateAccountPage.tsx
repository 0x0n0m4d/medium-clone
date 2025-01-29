import Link from 'next/link';
import CreateAccountForm from '../forms/CreateAccountForm';
import Logo from '../Logo';

interface Props {
  email: string;
}

const CreateAccountPage = ({ email }: Props) => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-white flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <Link
        href="/"
        className="min-h-[65px] w-full bg-white fixed top-0 py-10 z-20"
      >
        <span className="flex w-full h-full justify-center items-center">
          <Logo />
        </span>
      </Link>
      <section className="w-full h-full mt-[75px] p-28">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl serif text-black/80 tracking-tighter">
            Almost there!
          </h1>
          <p className="text-black/70 text-base mt-2">
            Finish creating your account for the full Medium experience.
          </p>
        </div>
        <CreateAccountForm email={email} />
      </section>
    </div>
  );
};

export default CreateAccountPage;
