import React from 'react';

const History: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#ef4444] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Geschichte
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-[#5a0017] mb-8 leading-tight">
            Stadtjugendring <br />
            <span className="italic font-normal">Urach e.V.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Ein Blick auf die Entstehung und Entwicklung des Stadtjugendrings und seiner Kinos.
          </p>
        </header>

        <section className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-xl border border-gray-100 p-8 md:p-12 animate-fadeIn">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Der Stadtjugendring Bad Urach e.V. ist Träger und Betreiber des forum22 in Bad Urach und des luna filmtheaters in Metzingen. Der Stadtjugendring wurde 1955 gegründet und ist seit 1975 ein eingetragener Verein.
            </p>
            <p>
              Schon in den 60er Jahren zeigte der „Jugendfilmclub“ des Stadtjugendrings im damaligen Residenzkino (ehemaliger Schlecker-Markt) anspruchsvolles Kino für junge Leute. Die Filmreihen, die eine gelungene Alternative zum herkömmlichen Main-Stream-Kino in Bad Urach bildeten, schienen einem allgemeinen Bedürfnis nach Filmkunst in Bad Urach entgegenzukommen.
            </p>
            <p>
              Als 1985 das Kino verkauft und zu einem Drogeriemarkt umfunktioniert wurde, erwarb der Stadtjugendring zwar die technische Ausrüstung, aber für eine neue Heimat des „Jugendfilmclubs“ fehlte der Raum, und natürlich das Geld. In dieser kinolosen Zeit entwickelte sich ein sorgfältiges Konzept für ein Kino mit Café, für das durch Bürgschaften, Darlehen und öffentliche sowie private Unterstützung Finanzierungsmöglichkeiten aufgetan wurden. Im ehemaligen Kino Waldhornkeller in der Ulmerstraße 22 fand man bald ein Objekt das den Vorstellungen gerecht wurde.
            </p>
            <p>
              Das forum22 sollte kein gewöhnliches Filmtheater werden. Durch die Hinzunahme eines Cafés sollte ein Kommunikationstreffpunkt entstehen, der mit der Integration einer Jugendinformationsstelle eine Erweiterung und Abrundung finden sollte. Es sollte ein Kultur- und Informationszentrum entstehen, das die Bereiche Programmkino mit Kleinkunstbühne, Jugendcafé und Jugendinformationszentrum mit Infothek unter einem Dach vereint.
            </p>
            <p>
              Viel Eigenleistung steckten die Stadtjgendring-Leute damals in Auf- und Umbau, bis nach drei Jahren Planungs- und Umbauzeit 1988 nun endlich das forum22 eröffnet werden konnte.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;

