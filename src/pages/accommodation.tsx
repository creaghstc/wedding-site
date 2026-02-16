export function Accommodation() {

    const data = [
        { id: 1, name: "Clanree Hotel", location: "Letterkenny", contact: "(074) 912 4369"},
        { id: 2, name: "Dillons Hotel", location: "Letterkenny", contact: "(074) 912 2977"},
        { id: 3, name: "Mount Errigal Hotel", location: "Letterkenny", contact: "(074) 912 2700"},
        { id: 4, name: "Station House Hotel", location: "Letterkenny", contact: "(074) 912 3100"},
        { id: 5, name: "The Frontier Hotel", location: "Bridgend", contact: "(074) 936 8667"},
        { id: 6, name: "Holiday Inn", location: "Derry", contact: "+44 28 7116 2400"},
        { id: 7, name: "Hotel No.9", location: "Derry", contact: "+44 79 8306 6484"},

    ];


    return (
        <>
            <div className="accommodationTableWrapper">
                    <table className="accommodationTable">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Contact</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(location => (
                            <tr key={location.id}>
                                <td>{location.name}</td>
                                <td>{location.location}</td>
                                <td>{location.contact}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </div>
            </>
    );
}