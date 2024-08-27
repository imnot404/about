import classNames from 'classnames'
import Link from 'next/link'

interface SidebarCtaProps {
    title?: string
    description?: string
    btnLabel?: string
    parentClassName?: string
    headingClassName?: string
    subTitleClassName?: string
    linkClassName?: string
}

const SidebarCta: React.FC<SidebarCtaProps> = ({
    title = 'Try Sourcegraph with your team',
    description = 'Search, write, and understand code faster with Code Search + Cody.',
    btnLabel = 'Book a demo',
    parentClassName,
    headingClassName,
    subTitleClassName,
    linkClassName,
}) => (
    <div
        className={classNames(
            'sg-bg-code-search-cta mx-auto flex w-full flex-col rounded-lg py-12 px-6 text-center sm:items-center md:w-[378px] md:items-center md:text-left',
            parentClassName
        )}
    >
        <h2 className={classNames(headingClassName, 'pb-4 text-white ')}>{title}</h2>
        <p className={classNames(subTitleClassName, 'pb-1 text-lg text-gray-200')}>{description}</p>
        <Link
            className={classNames(
                linkClassName,
                'btn btn-primary-dark flex min-w-fit self-center py-3 px-5 text-center text-base md:self-start md:py-2 md:px-6'
            )}
            href="/contact/request-info"
        >
            {btnLabel}
        </Link>
    </div>
)

export default SidebarCta