import MainLayout from "../components/MainLayout";
import MyForms from "../components/MyForms";
import SelectTemplate from "../components/SelectTemplate";

const Dashboard = () => {
  return (
    <MainLayout>
      <SelectTemplate />
      <MyForms />
    </MainLayout>
  );
};

export default Dashboard;
