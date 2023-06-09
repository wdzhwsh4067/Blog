import { Form, SubscribeSize, Subscribers } from '@/lib/types';

import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { SuccessMessage } from './SuccessMessage';
import { fetcher } from '@/lib/fetcher';
import siteMetadata from '@/data/siteMetadata';
import useSWR from 'swr';
import { useSubscribeToNewsletter } from '@/lib/hooks/useSubscribeToNewsletter';

function SubscribeCard({
  handleSubscribe,
  form,
  inputRef,
  // 修改删除这俩
  // subscriberCount,
  // issuesCount
}) {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="px-6 py-4 bg-[#F8FAFC] dark:bg-midnight rounded-3xl sm:py-8 sm:px-12 lg:flex lg:items-center lg:p-8 border border-slate-200 dark:border-slate-700">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Updates delivered to your inbox!
            </h2>
            <p className="max-w-3xl mt-4 ">
              A periodic update about my life, recent blog posts, how-tos, and
              discoveries.
            </p>
            <p className="mt-6 mb-0 text-sm">
              No spam - unsubscribe at any time!
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-4 lg:flex-1">
            <form className="sm:flex" onSubmit={handleSubscribe}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                ref={inputRef}
                id="email-address"
                name="email-address"
                placeholder="danawang@datalab.icu"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 bg-white dark:bg-dark border-gray-300 dark:border-gray-400 rounded-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#F8FAFC] dark:focus:ring-offset-midnight"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-full hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
              </button>
            </form>
            {form.state === Form.Error ? (
              <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === Form.Success ? (
              <SuccessMessage>{form.message}</SuccessMessage>
            ) : (
              <p className="mt-6 mb-0 text-sm">
                {/*修改：删除issues及subsribes*/}


                {/*{`${*/}
                {/*  subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'*/}
                {/*} subscribers – `}*/}
                {/*<a href={siteMetadata.newsletter}>{`${*/}
                {/*  issuesCount > 0 ? issuesCount.toLocaleString() : '-'*/}
                {/*} issues`}</a>*/}


                {`- subscriber me！- issues -`}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineSubscribe({ handleSubscribe, form, inputRef }) {
  return (
    <div>
      <h3 className="my-0 text-sm font-semibold tracking-wider uppercase">
        Newsletter
      </h3>
      <p className="mt-4 text-base ">
        Get new articles delivered to your inbox!
      </p>
      <form className="relative flex my-4 space-y-0" onSubmit={handleSubscribe}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          ref={inputRef}
          id="email-address"
          name="email-address"
          placeholder="danawang@datalab.icu"
          type="email"
          autoComplete="email"
          required
          className="w-full px-5 py-3 bg-white dark:bg-dark border-gray-300 dark:border-gray-400 rounded-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#F8FAFC] dark:focus:ring-offset-midnight"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-full hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : null}
    </div>
  );
}

type Props = {
  size: SubscribeSize;
};

export function Subscribe({ size }: Props) {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();
  //修改：删除这俩功能
  // const { data: subData } = useSWR<Subscribers>('/api/subscribers', fetcher);
  // const { data: issueData } = useSWR<Subscribers>('/api/issues', fetcher);
  // const subscriberCount = new Number(subData?.count);
  // const issuesCount = new Number(issueData?.count);

  if (size === SubscribeSize.SMALL) {
    return (
      <InlineSubscribe
        handleSubscribe={subscribe}
        form={form}
        inputRef={inputEl}
      />
    );
  }
  // 修改：删除这俩
  return (
    <SubscribeCard
      handleSubscribe={subscribe}
      form={form}
      inputRef={inputEl}
    />
  );
  // return (
  //   <SubscribeCard
  //     handleSubscribe={subscribe}
  //     form={form}
  //     inputRef={inputEl}
  //     subscriberCount={subscriberCount}
  //     issuesCount={issuesCount}
  //   />
  // );
}
