import { NuLogo, MpLogo, UglyLogo, PanLogo } from '../../assets/svg'

const projectArray = [
    {
        title: 'Consumption <br /> Coach',
        description: "NuBank's personal financial manager.",
        logo: NuLogo,
        backgroundColor: 'var(--nubank)',
        brand: 'nubank'
    },
    {
        title: "Seller's admin <br /> Coach",
        description: 'Launching of the MVP of the wallet.',
        logo: MpLogo,
        backgroundColor: 'var(--mp)',
        brand: 'mercado pago'
    },
    {
        title: 'Design System <br /> and App Concept',
        description: 'Launching of the MVP of the wallet',
        logo: UglyLogo,
        backgroundColor: 'var(--ugly)',
        brand: 'ugly'
    },
    {
        title: 'Design System <br /> and App Concept',
        description: 'Launching of the MVP of the wallet',
        logo: PanLogo,
        backgroundColor: '#EFEFEF',
        contentColor: 'var(--background)',
        brand: 'banco pan'
    }
]

export { projectArray }