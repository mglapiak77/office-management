import { Employee } from "./types/employee";
import { Issue } from "./types/issue";
import { Reservation } from "./types/reservation";
import { Resource } from "./types/resource";
import { Room } from "./types/room";

export const mockReservations: Reservation[] = [
  { id: 1, roomId: 101, employeeId: 1, date: '2025-05-23', startTime: '09:00', endTime: '10:00' },
  { id: 2, roomId: 102, employeeId: 2, date: '2025-05-23', startTime: '11:00', endTime: '12:00' },
  { id: 3, roomId: 103, employeeId: 3, date: '2025-05-24', startTime: '13:00', endTime: '14:00' },
  { id: 4, roomId: 104, employeeId: 4, date: '2025-05-24', startTime: '15:00', endTime: '16:00' },
  { id: 5, roomId: 105, employeeId: 5, date: '2025-05-25', startTime: '09:30', endTime: '10:30' },
  { id: 6, roomId: 101, employeeId: 6, date: '2025-05-25', startTime: '11:00', endTime: '12:00' },
  { id: 7, roomId: 102, employeeId: 7, date: '2025-05-26', startTime: '14:00', endTime: '15:00' },
  { id: 8, roomId: 103, employeeId: 8, date: '2025-05-26', startTime: '15:30', endTime: '16:30' },
  { id: 9, roomId: 104, employeeId: 9, date: '2025-05-27', startTime: '09:00', endTime: '10:00' },
  { id: 10, roomId: 105, employeeId: 10, date: '2025-05-27', startTime: '10:30', endTime: '11:30' },
];

export const mockRooms: Room[] = [
  { id: 101, name: 'Sala Konferencyjna A', floor: 1, capacity: 10, description: 'Sala z projektorem' },
  { id: 102, name: 'Sala Spotkań B', floor: 2, capacity: 6 },
  { id: 103, name: 'Sala Szkoleniowa C', floor: 3, capacity: 20, description: 'Sala z tablicą interaktywną' },
  { id: 104, name: 'Sala Spotkań D', floor: 1, capacity: 8 },
  { id: 105, name: 'Sala Prezentacyjna E', floor: 4, capacity: 25, description: 'Sala z nagłośnieniem' },
  { id: 106, name: 'Pokój Relaksu', floor: 2, capacity: 4 },
  { id: 107, name: 'Pokój Pracowników', floor: 3, capacity: 15 },
  { id: 108, name: 'Sala Zarządu', floor: 4, capacity: 12, description: 'Sala z videokonferencją' },
  { id: 109, name: 'Sala Kreatywna', floor: 1, capacity: 10 },
  { id: 110, name: 'Sala Spotkań F', floor: 2, capacity: 7 },
];

export const mockEmployees: Employee[] = [
  { id: 1, name: 'Jan Kowalski', position: 'Manager', email: 'jan.kowalski@firma.pl' },
  { id: 2, name: 'Anna Nowak', position: 'Developer', email: 'anna.nowak@firma.pl' },
  { id: 3, name: 'Piotr Wiśniewski', position: 'Designer', email: 'piotr.wisniewski@firma.pl' },
  { id: 4, name: 'Katarzyna Wójcik', position: 'HR', email: 'katarzyna.wojcik@firma.pl' },
  { id: 5, name: 'Marek Lewandowski', position: 'Tester', email: 'marek.lewandowski@firma.pl' },
  { id: 6, name: 'Magdalena Kaczmarek', position: 'Support', email: 'magdalena.kaczmarek@firma.pl' },
  { id: 7, name: 'Tomasz Zieliński', position: 'Developer', email: 'tomasz.zielinski@firma.pl' },
  { id: 8, name: 'Agnieszka Mazur', position: 'Marketing', email: 'agnieszka.mazur@firma.pl' },
  { id: 9, name: 'Robert Sikora', position: 'Developer', email: 'robert.sikora@firma.pl' },
  { id: 10, name: 'Ewa Dudek', position: 'Project Manager', email: 'ewa.dudek@firma.pl' },
];

export const mockResources: Resource[] = [
  { id: 1, type: 'computer', name: 'Komputer 1', location: 'Biuro 101', status: 'available' },
  { id: 2, type: 'desk', name: 'Biurko 1', location: 'Biuro 102', status: 'in use' },
  { id: 3, type: 'monitor', name: 'Monitor 1', location: 'Biuro 103', status: 'available' },
  { id: 4, type: 'printer', name: 'Drukarka 1', location: 'Biuro 104', status: 'out of order' },
  { id: 5, type: 'phone', name: 'Telefon 1', location: 'Biuro 105', status: 'available' },
  { id: 6, type: 'computer', name: 'Komputer 2', location: 'Biuro 106', status: 'available' },
  { id: 7, type: 'desk', name: 'Biurko 2', location: 'Biuro 107', status: 'in use' },
  { id: 8, type: 'monitor', name: 'Monitor 2', location: 'Biuro 108', status: 'available' },
  { id: 9, type: 'printer', name: 'Drukarka 2', location: 'Biuro 109', status: 'available' },
  { id: 10, type: 'phone', name: 'Telefon 2', location: 'Biuro 110', status: 'in use' },
];

export const mockIssues: Issue[] = [
  { id: 1, resourceId: 1, description: 'Nie działa myszka', reportedDate: '2025-05-20', status: 'open' },
  { id: 2, resourceId: 2, description: 'Uszkodzone biurko', reportedDate: '2025-05-21', status: 'in progress' },
  { id: 3, resourceId: 3, description: 'Monitor migocze', reportedDate: '2025-05-22', status: 'open' },
  { id: 4, resourceId: 4, description: 'Drukarka nie drukuje', reportedDate: '2025-05-23', status: 'closed' },
  { id: 5, resourceId: 5, description: 'Telefon przestał działać', reportedDate: '2025-05-24', status: 'open' },
  { id: 6, resourceId: 6, description: 'Komputer się nie włącza', reportedDate: '2025-05-25', status: 'in progress' },
  { id: 7, resourceId: 7, description: 'Biurko się chwieje', reportedDate: '2025-05-26', status: 'open' },
  { id: 8, resourceId: 8, description: 'Monitor nie reaguje', reportedDate: '2025-05-27', status: 'closed' },
  { id: 9, resourceId: 9, description: 'Drukarka się zacina', reportedDate: '2025-05-28', status: 'open' },
  { id: 10, resourceId: 10, description: 'Telefon ma przerywany dźwięk', reportedDate: '2025-05-29', status: 'in progress' },
];


export const companyInfo = {
  name: 'Office Sp. z o.o.',
  foundedYear: 2012,
  employeesCount: 420,
  clientsCount: 128,
  address: 'ul. Przykładowa 12, 00-001 Warszawa',
  email: 'kontakt@office.pl',
  phone: '+48 123 456 789',
};

export const officeImages = [
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    alt: 'Zespół pracujący w biurze',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    alt: 'Spotkanie w sali konferencyjnej',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    alt: 'Praca przy komputerze w biurze',
  },
];