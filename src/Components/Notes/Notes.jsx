import { useState } from 'react';
import { pdfLinks } from './Pdfs';

const Notes = () => {
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
   

    const semesters = [...new Set(pdfLinks.map(pdf => pdf.semester))];
    const subjects = pdfLinks.filter(pdf => pdf.semester === selectedSemester);
    const units = pdfLinks.filter(pdf => pdf.semester === selectedSemester && pdf.subject === selectedSubject);

    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
        setSelectedSubject('');
        setSelectedUnit('');
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
        setSelectedUnit('');
    };

    const handleUnitOpen = (link) => {
        setSelectedUnit(link);
    };

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">PDF Notes</h1>
            <div className="flex space-x-4 mb-4">
                <select value={selectedSemester} onChange={handleSemesterChange} className="p-2 border border-gray-300 rounded-lg focus:outline-none">
                    <option value="">Select Semester</option>
                    {semesters.map((semester, index) => (
                        <option key={index} value={semester}>{semester}</option>
                    ))}
                </select>
                <select value={selectedSubject} onChange={handleSubjectChange} className="p-2 border border-gray-300 rounded-lg focus:outline-none">
                    <option value="">Select Subject</option>
                    {subjects.map((subject, index) => (
                        <option key={index} value={subject.subject}>{subject.subject}</option>
                    ))}
                </select>
            </div>
            <div>
                {selectedSubject && units.map((unit, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">{unit.semester} - {unit.subject} - {unit.unit}</h2>
                        <button onClick={() => handleUnitOpen(unit.link)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Open PDF</button>
                    </div>
                ))}
            </div>
            {selectedUnit && (
                <div className="mt-4 max-w-screen-lg mx-auto">
                    <embed src={selectedUnit} type="application/pdf" width="100%" height="600px" />
                </div>
            )}
        </div>
    );
};

export default Notes;
