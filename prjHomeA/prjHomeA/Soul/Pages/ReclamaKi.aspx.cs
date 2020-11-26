using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class ReclamaKi : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();
            string Title = Request["T"];
            if (Title == "" || Title == null)
            {
                return;

            }
            string DS = Request["a"];
            if (DS == "" || DS == null)
            {
                return;

            }
            Banco.getCommand("SELECT * From Aviso_Reclamacao WHERE cd_tipo_Aviso_Reclamacao = 1");
            int Counter = 0;
            while (Banco.Selected.Read())
            {
                Counter++;

            }
            Banco.setCommand("INSERT INTO Aviso_Reclamacao VALUES (CURRENT_DATE(),'Ar-Condicionado do salão principal não funciona',0,1,1);");

        }
    }
}