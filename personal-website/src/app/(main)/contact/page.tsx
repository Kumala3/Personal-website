import ContactCard from "@/components/ContactCard"

export default function ContactPage() {
    return (
        <>
            <div className="flex flex-row gap-24">
                <ContactCard label="LinkedIn" iconName="LinkedIn" />
                <ContactCard label="GitHub" iconName="GitHub" />
            </div>
        </>
    )
}
