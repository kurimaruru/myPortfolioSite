export const Hero = () => {
  return (
    <div className="mx-16">
      <div className="">
        <table className="w-full text-center bg-white bg-opacity-50">
          <thead className="bg-gray-100 bg-opacity-70">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 hover:bg-opacity-70">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr className="hover:bg-gray-50 hover:bg-opacity-70">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr className="hover:bg-gray-50 hover:bg-opacity-70">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
